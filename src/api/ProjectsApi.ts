import {
	collection,
	deleteDoc,
	doc,
	getCountFromServer,
	getDoc,
	getDocs,
	orderBy,
	query,
	setDoc,
	updateDoc,
	writeBatch
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { ProjectsDetailsProps, ProjectsItemProps } from "../types/Projects.types";
import { db, storage } from "../utils/firebase";

class ProjectsApi {
	async getProjectsDetails(): Promise<ProjectsDetailsProps> {
		try {
			const detailsRef = doc(db, "data", "projects");

			const docSnap = await getDoc(detailsRef);

			return docSnap.data() as ProjectsDetailsProps;
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}

	async getProjectsList(): Promise<ProjectsItemProps[]> {
		try {
			const ref = collection(db, "data", "projects", "list");

			const ordered = query(ref, orderBy("order", "asc"));

			const data = await getDocs(ordered);

			console.log(
				"projects",
				data.docs.map((doc) => doc.data())
			);

			return data.docs.map((doc) => doc.data() as ProjectsItemProps);
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}

	async updateProjectsDetails(data: ProjectsDetailsProps): Promise<void> {
		try {
			const detailsRef = doc(db, "data", "projects");

			await updateDoc(detailsRef, data);
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}

	async createProjectsItem(item: ProjectsItemProps): Promise<void> {
		try {
			const newId = uuidv4();

			const images = item.images;

			if (item.inputedImages && item.inputedImages?.length > 0) {
				await Promise.all(
					item.inputedImages?.map(async (inputedImage) => {
						const imageId = uuidv4();
						const storageRef = ref(storage, `projects/${newId}/${imageId}`);

						await uploadBytes(storageRef, inputedImage);

						const imageUrl = await getDownloadURL(storageRef);

						return images.push({
							url: imageUrl,
							order: inputedImage.order ?? 0,
							title: inputedImage.title ?? "",
							id: imageId
						});
					})
				);
			}

			const snapshot = await getCountFromServer(collection(db, "data/projects/list"));

			const body = {
				id: newId,
				title: item.title,
				subtitle: item.subtitle,
				images,
				description: item.description,
				order: (snapshot.data().count ?? 0) + 1
			};

			const detailsRef = doc(db, `data/projects/list/${newId}`);

			await setDoc(detailsRef, body);
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}

	async updateProjectsItem(item: ProjectsItemProps): Promise<void> {
		try {
			let imageUrl = item.imageUrl;

			if (item.inputedImage) {
				const storageRef = ref(storage, `projects/${item.id}`);

				await uploadBytes(storageRef, item.inputedImage);

				imageUrl = await getDownloadURL(storageRef);
				console.log("imageUrl", imageUrl);
			}

			const detailsRef = doc(db, "data", "projects", "list", item.id);

			const body = {
				title: item.title,
				subtitle: item.subtitle,
				imageUrl,
				category: item.category,
				date: item.date
			};

			await updateDoc(detailsRef, body);
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}

	async deleteProjectsItem(id: string): Promise<void> {
		try {
			const detailsRef = doc(db, "data", "projects", "list", id);

			await deleteDoc(detailsRef);
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}

	async reorderProjectsItems(items: ProjectsItemProps[]): Promise<void> {
		try {
			const batch = writeBatch(db);

			items.forEach((item, index) => {
				const detailsRef = doc(db, "data", "projects", "list", item.id);

				console.log("detailsRef", item, index);

				batch.update(detailsRef, { order: item.order });
			});

			await batch.commit();
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}
}

export default new ProjectsApi();
