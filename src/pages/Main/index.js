import react, {useState, useEffect} from 'react'

import Articles from '../../components/Articles'

import api from '../../services/postsApi'

import './style.css'

export default function Main() {

    const [data, setData] = useState()

    const fetchInformationPosts = async () => {
        const content = await api.get('/posts')

        if(content.data) {
            setData(content.data)
        }
    }

    useEffect(async () => {
        await fetchInformationPosts()
        
    })

    return (
        <div className="main">
            <h1>Articles</h1>

            <div className="feed">
                {
                    data?.map(data => {
                        return(
                            <Articles
                            categorie={data.categorie} 
                            title={data.title} 
                            author={data.author}
                            avatar={data.avatar}>
                                {data.content}
                            </Articles>
                        )
                        
                    })
                }
                
            </div>
        </div>
    )
}