import Image from "next/image";
import { getAllPostFile, getMetadata } from "@/lib/BlogEngine"
import Link from "next/link";


export default function Home() {

  const postFiles = getAllPostFile();
  var post_list_html = [];
  postFiles.forEach(postFile => {
    const d = getMetadata(postFile);
    post_list_html.push(
      <PostCard data={d} />
    );
  });

  return (
    <div className="p-1">
      <br />
      <div className=" grid grid-cols-3 gap-1 ">
        {post_list_html}
      </div>
    </div>
  )

}


function PostCard({ data }) {
  const url = "/" + data.slug;
  return (
    <Link href={url} prefetch={true}>
      <div className="shadow-md p-2 rounded-lg w-full">
        <div className="aspect-video relative ">
          <Image className="rounded-lg" src={data.thumbnail} fill={true} />
        </div>
        <div className="p-2">
          <p className="text-lg font-medium">{data.title}</p>
          <p className="text-base font-light">{data.description}</p>
        </div>
      </div>
    </Link>)
}



