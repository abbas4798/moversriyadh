// import Head from 'next/head'

// const PageHead = ({ headTitle }) => {
//     return (
//         <>
//             <Head>
//                 <title>
//                     {headTitle ? headTitle : "Transp - Transport Courier Logistics HTML Template"}
//                 </title>
//                 <link rel="shortcut icon" href="/favicon.svg" />
//             </Head>
//         </>
//     )
// }

// export default PageHead
import Head from 'next/head'

const PageHead = ({ headTitle, description, keywords, author }) => {
    return (
        <>
            <Head>
                {/* Title Tag */}
                <title>
                    {headTitle ? headTitle : "Riyadh Moving Services - Moving Services in Riyadh, Saudi Arabia"}
                </title>

                {/* Meta Description */}
                <meta name="description" content={description || "Top moving services in Riyadh, Saudi Arabia. We offer reliable, fast, and professional moving and logistics solutions for individuals and businesses."} />

                {/* Meta Keywords */}
                <meta name="keywords" content={keywords || "moving services Riyadh, moving company Riyadh, logistics Riyadh, Saudi Arabia movers, relocation services Riyadh, professional moving services, furniture moving Riyadh"} />

                {/* Author Meta Tag */}
                <meta name="author" content={author || "Riyadh Moving Services"} />

                {/* Open Graph Meta Tags (for Facebook and LinkedIn sharing) */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={headTitle || "Transp - Moving Services in Riyadh, Saudi Arabia"} />
                <meta property="og:description" content={description || "Top moving services in Riyadh, Saudi Arabia. We offer reliable, fast, and professional moving and logistics solutions for individuals and businesses."} />
                {/* <meta property="og:image" content="/path-to-your-image.jpg" />  Replace with the actual image URL */}
                <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ""} />
                
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={headTitle || "Transp - Moving Services in Riyadh, Saudi Arabia"} />
                <meta name="twitter:description" content={description || "Top moving services in Riyadh, Saudi Arabia. We offer reliable, fast, and professional moving and logistics solutions for individuals and businesses."} />
                <meta name="twitter:image" content="/path-to-your-image.jpg" /> {/* Replace with the actual image URL */}
                <meta name="twitter:site" content="@yourtwitterhandle" /> {/* Replace with your Twitter handle */}

                {/* Favicon */}
                <link rel="shortcut icon" href="/favicon.svg" />
                
                {/* Canonical Link */}
                <link rel="canonical" href={typeof window !== "undefined" ? window.location.href : ""} />
            </Head>
        </>
    )
}

export default PageHead
