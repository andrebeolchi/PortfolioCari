import { collection, doc, getDoc, getDocs } from "@firebase/firestore";
import { AcademicDetailsProps, AcademicItemProps } from "../types/Academic.types";
import { db } from "../utils/firebase";

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
			const ref = collection(db, "data", "academic-education", "posts");

			const data = await getDocs(ref);

			return data.docs.map((doc) => doc.data() as AcademicItemProps);
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}
}

export default new AcademicApi();
