const LaptopDetailsTable = ({product}) => {
    return (
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Category</th>
              <td>{product.subCategory.title}</td>
            </tr>
            <tr>
              <th scope="row">Model</th>
              <td>{product.modelName}</td>
            </tr>
            <tr>
              <th scope="row">Brand</th>
              <td>{product.brand}</td>
            </tr>
            <tr>
              <th scope="row">CPU</th>
              <td>{product.CPUModel}</td>
            </tr>
            <tr>
              <th scope="row">RAM</th>
              <td>{product.RAM}</td>
            </tr>
            <tr>
              <th scope="row">Storage Type</th>
              <td>{product.storageType}</td>
            </tr>
            <tr>
              <th scope="row">Storage</th>
              <td>{product.storage}</td>
            </tr>
            <tr>
              <th scope="row">Video Card</th>
              <td>{product.videoCardModel}</td>
            </tr>
            <tr>
              <th scope="row">Video Card Memory</th>
              <td>{product.videoCardMemory + 'GB'}</td>
            </tr>
            <tr>
              <th scope="row">Display</th>
              <td>{product.display}</td>
            </tr>
            <tr>
              <th scope="row">OS</th>
              <td>{product.OS}</td>
            </tr>
            <tr>
              <th scope="row">Weight</th>
              <td>{product.weight}</td>
            </tr>
          </tbody>
        </table>
    )
}

export default LaptopDetailsTable;