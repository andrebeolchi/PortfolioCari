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
import { AcademicDetailsProps, AcademicItemProps } from "../types/Academic.types";
import { db, storage } from "../utils/firebase";

class AcademicApi {
	async getAcademicDetails(): Promise<AcademicDetailsProps> {
		try {
			const detailsRef = doc(db, "data", "academic-education");

			const docSnap = await getDoc(detailsRef);

			return docSnap.data() as AcademicDetailsProps;
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}

	async getAcademicList(): Promise<AcademicItemProps[]> {
		try {
			const ref = collection(db, "data", "academic-education", "list");

			const ordered = query(ref, orderBy("order", "asc"));

			const data = await getDocs(ordered);

			return data.docs.map((doc) => doc.data() as AcademicItemProps);
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}

	async updateAcademicDetails(data: AcademicDetailsProps): Promise<void> {
		try {
			const detailsRef = doc(db, "data", "academic-education");

			await updateDoc(detailsRef, data);
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}

	async createAcademicItem(item: AcademicItemProps): Promise<void> {
		try {
			const newId = uuidv4();

			let image = item.image;

			if (item.inputedImage) {
				const storageRef = ref(storage, `academic/${newId}`);

				await uploadBytes(storageRef, item.inputedImage);

				image = await getDownloadURL(storageRef);
				console.log("image", image);
			}

			const detailsRef = doc(db, `data/academic-education/list/${newId}`);

			const snapshot = await getCountFromServer(collection(db, "data/academic-education/list"));

			const body = {
				id: newId,
				title: item.title,
				subtitle: item.subtitle,
				image,
				category: item.category,
				date: item.date,
				order: (snapshot.data().count ?? 0) + 1
			};

			await setDoc(detailsRef, body);

			console.log("ref", ref);
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}

	async updateAcademicItem(item: AcademicItemProps): Promise<void> {
		try {
			let image = item.image;

			if (item.inputedImage) {
				const storageRef = ref(storage, `academic/${item.id}`);

				await uploadBytes(storageRef, item.inputedImage);

				image = await getDownloadURL(storageRef);
				console.log("image", image);
			}

			const detailsRef = doc(db, "data", "academic-education", "list", item.id);

			const body = {
				title: item.title,
				subtitle: item.subtitle,
				image,
				category: item.category,
				date: item.date
			};

			await updateDoc(detailsRef, body);
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}

	async deleteAcademicItem(id: string): Promise<void> {
		try {
			const detailsRef = doc(db, "data", "academic-education", "list", id);

			await deleteDoc(detailsRef);
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}

	async reorderAcademicItems(items: AcademicItemProps[]): Promise<void> {
		try {
			const batch = writeBatch(db);

			items.forEach((item, index) => {
				const detailsRef = doc(db, "data", "academic-education", "list", item.id);

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

export default new AcademicApi();
