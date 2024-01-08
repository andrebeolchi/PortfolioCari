import { collection, doc, getDoc, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";

const defaultPosts = [
	{
		id: 1,
		title: "Anhembi Morumbi",
		href: "#",
		description: "",
		date: "2021 - 2021",
		datetime: "2020-03-16",
		category: "Arquitetura e Urbanismo",
		place: {
			name: "Michael Foster",
			role: "Co-Founder / CTO",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
		}
	}
];

export default function AcademicSection() {
	const [posts, setPosts] = useState<PostProps[]>([]);
	const [details, setDetails] = useState<DetailsProps>();

	useEffect(() => {
		getDetails();
		getPosts();
	}, []);

	const getDetails = async () => {
		const detailsRef = doc(db, "data", "academic-education");

		const docSnap = await getDoc(detailsRef);

		setDetails(docSnap.data() as DetailsProps);
	};

	const getPosts = async () => {
		const ref = collection(db, "data", "academic-education", "posts");

		const data = await getDocs(ref);

		setPosts(data.docs.map((doc) => doc.data() as PostProps));
	};

	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{details?.title}</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">{details?.description}</p>
				</div>
				<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map((post) => (
						<article
							key={post.id}
							className="flex max-w-xl flex-col items-start justify-between">
							<div className="flex items-center gap-x-4 text-xs">
								<p className="text-gray-500">{post.date}</p>
								<p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
									{post.category}
								</p>
							</div>
							<div className="group relative">
								<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
									<a href={post.href}>
										<span className="absolute inset-0" />
										{post.title}
									</a>
								</h3>
								{post.description && (
									<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
								)}
							</div>
							<div className="mt-8">
								<img
									src={post.imageUrl}
									alt=""
									className="h-auto w-full rounded-md bg-gray-50"
								/>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}
