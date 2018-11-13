import React from 'react'
import './AppBar.css'
import SearchBar from '@opuscapita/react-searchbar'

// Component to show Header of the page, search bar and title of the search
class AppBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchQuery: '',
            filterValue: '',
            title: 'Lista de Produtos'
        }
    }

    handleSearch = (searchQuery) => {
        this.setState({ searchQuery, title: searchQuery })
    }

    handleFilter = (filterValue) => {
        this.setState({ filterValue })
    }

    render() {

        return (
            <div>
                <header>
                    <nav id='top-nav'>
                        
                        {/* mmartan Logo */}
                        <div className='logo'>
                            <svg id="icon-logo-mmartan" viewBox="0 0 264 32" width="100%" height="100%" color="rgb(128, 108, 92)">
                                <title>logo-mmartan</title>
                                <path d="M0.188 12.8c0-1.882 0-4.329-0.188-6.212h6.965c0 1.318 0.188 2.635 0.188 3.953 2.824-3.388 5.835-4.894 9.788-4.894 4.518 0 8.282 1.882 10.165 5.647 2.635-4.329 6.588-5.647 10.541-5.647 4.518 0 11.294 1.882 11.294 11.482v14.871h-7.153v-13.365c0-6.212-2.635-7.718-6.212-7.718-3.765 0-7.341 2.824-7.341 9.035v12.047h-7.153v-13.365c0-6.212-2.635-7.718-6.212-7.718-3.765 0-7.341 2.824-7.341 9.035v12.047h-7.341v-19.2z"></path>
                                <path d="M58.541 12.8c0-1.882-0.188-4.329-0.188-6.212h6.965c0.188 1.318 0.188 2.635 0.188 3.953 2.824-3.388 5.835-4.894 9.788-4.894 4.518 0 8.282 1.882 10.165 5.647 2.635-4.329 6.588-5.647 10.541-5.647 4.518 0 11.294 1.882 11.294 11.482v14.871h-7.153v-13.365c0-6.212-2.635-7.718-6.212-7.718-3.765 0-7.341 2.824-7.341 9.035v12.047h-7.153v-13.365c0-6.212-2.635-7.718-6.212-7.718-3.765 0-7.341 2.824-7.341 9.035v12.047h-7.153v-19.2z"></path>
                                <path d="M142.871 26.353c0 1.694 0 3.012 0.188 4.706h-6.776c-0.188-1.129-0.188-2.259-0.188-3.388-3.012 3.012-6.776 4.329-11.671 4.329-8.659 0-11.482-3.953-11.482-7.529 0-7.718 7.341-9.035 16.565-9.035h6.024c0-4.329-3.012-5.459-6.776-5.459-3.576 0-5.647 1.506-6.024 3.388h-7.718c0.753-6.212 7.529-7.718 13.741-7.718 6.776 0 13.929 1.882 13.929 10.541v10.165zM129.318 19.953c-5.647 0-8.847 1.129-8.847 4.141 0 1.694 1.318 3.953 5.647 3.953 3.576 0 9.224-2.071 9.224-8.094h-6.024z"></path>
                                <path d="M150.776 12.235c0-2.259-0.188-4.329-0.188-6.024h7.341c0 1.318 0.188 2.824 0.188 4.329v0c0.753-1.694 2.447-4.894 8.282-4.894 1.694 0 3.012 0.188 4.894 0.565v5.459c-0.376-0.188-0.941-0.188-1.506-0.188s-1.129-0.188-1.882-0.188c-6.212 0-9.412 2.447-9.412 9.035v9.788h-7.529v-17.882z"></path>
                                <path d="M185.224 0v6.965h8.659v5.647h-8.659v10.541c0 2.635 1.129 4.141 3.953 4.141 1.506 0 3.576-0.188 4.518-0.376v4.706c-1.882 0.188-4.141 0.376-6.212 0.376-7.341 0-9.6-2.447-9.6-8.094v-11.294h-4.706v-5.647h4.894v-5.271l7.153-1.694z"></path>
                                <path d="M227.576 26.353c0 1.694 0 3.012 0.188 4.706h-6.776c-0.188-1.129-0.188-2.259-0.188-3.388-3.012 3.012-6.776 4.329-11.671 4.329-8.471 0-11.482-3.953-11.482-7.529 0-7.718 7.341-9.035 16.565-9.035h5.835c0-4.329-3.012-5.459-6.776-5.459-3.576 0-5.647 1.506-6.024 3.388h-7.718c0.753-6.212 7.529-7.718 13.741-7.718 6.776 0 13.929 1.882 13.929 10.541v10.165zM214.024 19.953c-5.647 0-8.847 1.129-8.847 4.141 0 1.694 1.318 3.953 5.647 3.953 3.576 0 9.224-2.071 9.224-8.094h-6.024z"></path>
                                <path d="M235.482 12.612c0-2.259 0-4.329-0.188-6.024h6.965c0.188 1.506 0.188 2.824 0.188 4.141v0c2.447-3.576 5.647-5.082 10.165-5.082 4.329 0 10.918 2.447 10.918 10.729v15.624h-7.153v-13.365c0-6.212-2.635-7.718-6.212-7.718-3.765 0-7.341 2.824-7.341 9.035v12.047h-7.153v-19.388z"></path>
                            </svg>
                        </div>

                        {/* Search Bar */}
                        <div id='search-bar' >
                            <form>
                                <SearchBar onSearch={this.handleSearch}
                                    value={this.state.searchQuery} searchPlaceHolder={'Pesquisar...'} />
                            </form>
                        </div>

                    </nav>

                    {/* Title of the search */}
                    <nav id='title-nav'>
                        <h1 id='title-h1'>{this.state.title}</h1>
                    </nav>
                    
                </header>
            </div>
        )
    }
}

export default AppBar