import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from "@firebase/firestore";
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

			const data = await getDocs(ref);

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

			let imageUrl = item.imageUrl;

			if (item.inputedImage) {
				const storageRef = ref(storage, `academic/${newId}`);

				await uploadBytes(storageRef, item.inputedImage);

				imageUrl = await getDownloadURL(storageRef);
				console.log("imageUrl", imageUrl);
			}

			const detailsRef = doc(db, `data/academic-education/list/${newId}`);

			const body = {
				id: newId,
				title: item.title,
				subtitle: item.subtitle,
				imageUrl,
				category: item.category,
				date: item.date
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
			let imageUrl = item.imageUrl;

			if (item.inputedImage) {
				const storageRef = ref(storage, `academic/${item.id}`);

				await uploadBytes(storageRef, item.inputedImage);

				imageUrl = await getDownloadURL(storageRef);
				console.log("imageUrl", imageUrl);
			}

			const detailsRef = doc(db, "data", "academic-education", "list", item.id);

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
}

export default new AcademicApi();
