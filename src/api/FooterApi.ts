import { collection, doc, getDocs, writeBatch } from "@firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { FooterGroup } from "../types/Footer";
import { FirebaseError, db } from "../utils/firebase";

class FooterApi {
	async getFooterLists(): Promise<FooterGroup[] | void> {
		try {
			const ref = collection(db, "data", "footer", "list");

			const data = await getDocs(ref);

			return data.docs.map((doc) => doc.data() as FooterGroup);
		} catch (error) {
			if (error instanceof FirebaseError) {
				throw new Error(error.message);
			}
		}
	}

	async upsertFooterLists(lists: FooterGroup[]): Promise<void> {
		try {
			const batch = writeBatch(db);

			for (const list of lists) {
				if (!list.id) {
					list.id = uuidv4();
				}

				const ref = doc(db, `data/footer/list/${list.id}`);

				batch.set(ref, list);

				console.log(list);
			}

			await batch.commit();
		} catch (error) {
			if (error instanceof FirebaseError) {
				throw new Error(error.message);
			}
		}
	}
}

export default new FooterApi();
