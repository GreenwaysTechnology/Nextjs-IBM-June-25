import PRODUCTS from "@/app/mock-data/products"

export default async function ProductsDetails(props) {
    const id = (await props.params).id
    // Read Products details
    const product = PRODUCTS.find(product => product.id === Number(id))
    return <div>
        <h1>{id}</h1>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <h2>{product.price}</h2>
    </div>
}