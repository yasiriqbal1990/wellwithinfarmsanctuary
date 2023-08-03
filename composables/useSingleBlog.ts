import { doc, getDoc } from "firebase/firestore"
import type Blog from "../types/Blog"

export default function useSingleBlog(){
    let singleBlog = reactive<Blog[]>([])
    const nuxtApp:any = useNuxtApp()

    const fetchSingleJob = async (collectionName: string, docName: string) => {
        try {

            const docRef = doc(nuxtApp.$db, collectionName, docName);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                singleBlog.push({
                    id:docSnap.id,
                    title:docSnap.data().title,
                    subject:docSnap.data().subject,
                    body:docSnap.data().body
                })
            }

        } catch (error) {
            console.log("Error fetaching data: ", error)
        }
    }

    return {
        fetchSingleJob,
        singleBlog
    }
}


