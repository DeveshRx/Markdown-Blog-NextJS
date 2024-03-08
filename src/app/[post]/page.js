import { getAllPostFile, getHTML, getMetadata } from "@/lib/BlogEngine"
import parse from 'html-react-parser';
import Image from "next/image";

export async function generateStaticParams() {
    const posts = getAllPostFile();

    var mPosts = [];
    posts.forEach(e => {
        mPosts.push(e.replace('.md', ''));
    });

    return mPosts.map((post) => ({
        post: String(post)
    }))
}

export async function generateMetadata({ params }) {

    const metadata = getMetadata(params.post + ".md");
    return {
        title: metadata.title,
        description: metadata.description,
        category: metadata.category,
        keywords: String(metadata.tags).split(","),
        alternates: {
            canonical: 'https://my-website.com/' + metadata.slug,
        },
        openGraph: {
            images: metadata.thumbnail,
        },
    }
}


export default function BlogPostPage({ params }) {

    const postHTML = getHTML(params.post + ".md");
    const metadata = getMetadata(params.post + ".md");

    const tags = String(metadata.tags).split(",");
    var TagsHTML = [];
    tags.forEach(tag => {
        TagsHTML.push(
            <p className="bg-sky-300 rounded-full py-1 px-2 w-fit inline-block m-1">
                {tag}
            </p>)
    })
    
    return (
        <div className="max-w-4xl mx-auto p-2">
            <h1 className="text-xl font-bold">{metadata.title}</h1>
            <p className="bg-emerald-300 rounded-full py-1 px-2 w-fit inline-block m-1 text-sm">
                {metadata.category}
            </p>
            <div className="aspect-video relative max-h-80 mx-auto ">
                <Image
                    className="rounded-lg"
                    src={metadata.thumbnail}
                    fill={true}
                    alt={metadata.title} />
            </div>
            <br />
            <article className="prose prose-base max-w-4xl mx-auto prose-h1:text-lg prose-p:text-base">
                {parse(postHTML)}
            </article>
            <div className="w-fit text-sm">{TagsHTML}</div>
        </div>
    )
}






