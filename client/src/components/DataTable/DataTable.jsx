import React from 'react';
import Pagination from 'react-js-pagination';
// import request from 'request'
import './DataTable.css';

// Component to show a data of products
class DataTable extends React.Component {

  /** Constructor  */
  constructor(props) {
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handlePerPage = this.handlePerPage.bind(this)
    this.state = {
      foundProducts: 0,
      activePage: 1,
      productsPerPage: 5,
      data: []
    }
  }

  /** This function does not work at the moment for a valid JSON, Only an object */
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        data: res.products,
        foundProducts: res.products.length
      }))
      .catch(err => console.log(err))
  }
  /** Retrives the data */
  callApi = async () => {
    /** Inserting static values to show the client browser.
     * Dynamic values would be on : 
     * const response = await fetch('/products/:search')
     */
    const response = await fetch('/static')
    const body = await response.json()
    if (response.status !== 200) throw Error(body.message)

    return body
  }

  /** Incomplete : Trying to read a valid JSON in the client */
  // componentDidMount() {
  //   const uri = ('http://localhost:5000' || process.env.BASE_URL) + '/products' 
  //   request(uri, (err, res, body) => {
  //     var result = JSON.parse(body)
  //     if (this.isMounted()) {
  //       this.setState(result.products)
  //     }
  //     this.setState({foundProducts: result.products.length})
  //   })
  // }

  // Handle to get an event everytime a page is changed
  handlePageChange(pageNumber) {
    if (pageNumber === undefined) {
      this.setState({
        activePage: 1
      })
    } else {
      // this.setState({ activePage: pageNumber.target.value})
    }
  }

  // Handle to get an event everytime the number of products in a page is changed
  handlePerPage(selectEvent) {
    this.setState({
      productsPerPage: selectEvent.target.value
    })
  }

  render() {
    let rows = this.state.data.map(products => {
      return <ProductRow key={products.id} data={products} />
    })

    return (
      <div className='padding'>
        {/* List of products */}
        <div className='results'>
          <div>
            <div className='result-types'>
              <div className='result-types-found'>
                <span>
                  {this.state.foundProducts > 0 ?
                    (this.state.foundProducts + ' Produtos Encontrados') :
                    'Nenhum produto encontrado'}
                </span>
              </div>
            </div>

            <div className='result-items'>
              <div id='data-table'>
                <table>
                  <tbody>{rows}</tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Pagination and Number of products to show */}
          <div className='pagination-table'>
            <div className='select-pagination'>
              <select className='select-style' value={this.state.productsPerPage} onChange={this.handlePerPage}>
                <option value={5}>5 produtos por página</option>
                <option value={10}>10 produtos por página</option>
                <option value={16}>16 produtos por página</option>
              </select>
            </div>

            <div>
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.productsPerPage}
                pageRangeDisplayed={5}
                /**
                 * Static Value in totalItemCounts to show the Pagination resizing
                 * for dynamic : totalItemsCount={this.state.foundProducts} */ 
                totalItemsCount={30}
                onChange={this.handlePageChange.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Default URLs to show images on the products list
const imageStyle = {
  backgroundImage: 'url(https://dgn7v532p0g5j.cloudfront.net/unsafe/0x0/products/photos/still/l_n38camv19czpng1540308022867.jpeg)'
}
const imageStyle2 = {
  backgroundImage: 'url(https://dgn7v532p0g5j.cloudfront.net/unsafe/0x0/products/photos/semi-environment/KM22M.GOUO12IVa-1490817142.jpeg)',
}
const imageStyle3 = {
  backgroundImage: 'url(https://dgn7v532p0g5j.cloudfront.net/unsafe/496x496/product-tree/mmartan-features/Cama.jpg)'
}
const imageStyle4 = {
  backgroundImage: 'url(https://dgn7v532p0g5j.cloudfront.net/unsafe/0x0/products/photos/semi-environment/L_N4H.MONO18CHa.png.1521470002613.jpeg)'
}

// Create the row of products 
const ProductRow = (props) => {
  return (
    <div className='products-list'>
      {/* Products Images */}
      <td className='product-images'>
        <div className='product-image-row'>
          <div className='product-image' style={imageStyle}>
            {props.data.productUrlPicture1}
          </div>
          <div className='product-image' style={imageStyle2}>
            {props.data.productUrlPicture2}
          </div>
          <div className='product-image' style={imageStyle3}>
            {props.data.productUrlPicture3}
          </div>
          <div className='product-image' style={imageStyle4}>
            {props.data.productUrlPicture4}
          </div>
        </div>
      </td>

      {/* Products Information */}
      <td className='result-items'>
        <div className='product-info'>
          <div className='product-info-box'>
            <div className='product-info-box-top'>
              {props.data.productName}
            </div>
            <div className='product-info-box-bottom'>
              {props.data.productStyle + ' | ' + props.data.productType}
            </div>
          </div>
          <div className='product-info-price'>
            <span className='crossed'>{'R$ ' + props.data.productWithoutDiscount}</span>
            <span className='price-highlight'>{' por R$ ' + props.data.productWithDiscount}</span>
          </div>
        </div>
        <div>
        </div>
      </td>
    </div>
  )
}
export default DataTable
