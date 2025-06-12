import FetchPost from "./components/postusingfetch";
import FetchPostUsingSWR from "./components/postusingswr";

export default  function PostsPage(){
    console.log('Post Page')
    return <>
        {/* <FetchPost/> */}
        <FetchPostUsingSWR/>
    </>
}