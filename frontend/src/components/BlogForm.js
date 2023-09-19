import { useState } from "react";
import { useBlogsContext } from "../hooks/useBlogsContext";
import { NavBar } from "./NavBar";

export const BlogForm = () => {
  const { dispatch } = useBlogsContext();

  const [title, setTitle] = useState("");
  const [short_description, setShort_description] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [blogtype, setBlogtype] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blog = { title, short_description, content, thumbnail, blogtype };

    const response = await fetch("/blog", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setEmptyFields([]);
      setError(null);
      setTitle("");
      setShort_description("");
      setContent("");
      setThumbnail("");
      setBlogtype("");

      dispatch({ type: "CREATE_BLOG", payload: json });
    }
  };

  return (
    <>
    <NavBar/>
   <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
  <h3 className="text-2xl font-semibold mb-6 ml-20">Add a New Blog</h3>

  <div className="mb-4">
    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
      Blog Title:
    </label>
    <input
      type="text"
      id="title"
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400 ${
        emptyFields.includes("title") ? "border-red-500" : ""
      }`}
      onChange={(e) => setTitle(e.target.value)}
      value={title}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="short_description" className="block text-gray-700 font-bold mb-2">
      Bio:
    </label>
    <input
      type="text"
      id="short_description"
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400 ${
        emptyFields.includes("short_description") ? "border-red-500" : ""
      }`}
      onChange={(e) => setShort_description(e.target.value)}
      value={short_description}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
      Content:
    </label>
    <input
      type="text"
      id="content"
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400 ${
        emptyFields.includes("content") ? "border-red-500" : ""
      }`}
      onChange={(e) => setContent(e.target.value)}
      value={content}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="thumbnail" className="block text-gray-700 font-bold mb-2">
      Thumbnail:
    </label>
    <input
      type="file"
      id="thumbnail"
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400 ${
        emptyFields.includes("thumbnail") ? "border-red-500" : ""
      }`}
      onChange={(e) => setThumbnail(e.target.value)}
      value={thumbnail}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="blogtype" className="block text-gray-700 font-bold mb-2">
      Blog Type:
    </label>
    <input
      type="text"
      id="blogtype"
      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400 ${
        emptyFields.includes("blogtype") ? "border-red-500" : ""
      }`}
      onChange={(e) => setBlogtype(e.target.value)}
      value={blogtype}
    />
  </div>

  <button
    type="submit"
    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
  >
    Add Blog
  </button>

  {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
</form>
</>
  );
};

// export default BlogForm;
