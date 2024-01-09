import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { HeroProps } from "../types/Hero.types";
import { db, storage } from "../utils/firebase";

class HeroApi {
	async getHero(): Promise<HeroProps> {
		try {
			const detailsRef = doc(db, "data", "hero-section");

			const docSnap = await getDoc(detailsRef);

			return docSnap.data() as HeroProps;
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}

	async updateHero(hero: HeroProps): Promise<void> {
		try {
			let image = hero.image;

			if (hero.inputedImage) {
				const storageRef = ref(storage, `images/icon`);

				await uploadBytes(storageRef, hero.inputedImage);

				image = await getDownloadURL(storageRef);
				console.log("image", image);
			}

			const detailsRef = doc(db, "data", "hero-section");

			const body = {
				title: hero.title,
				subtitle: hero.subtitle,
				image
			};

			await updateDoc(detailsRef, body);

			return;
		} catch (error) {
			console.log("error", error);
			throw new Error(error.response.data.error);
		}
	}
}

export default new HeroApi();
