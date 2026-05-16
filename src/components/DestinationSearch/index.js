import { Component } from "react";
import DestinationItem from "../DestinationItem";
import "./index.css";

class DestinationSearch extends Component{
    state={searchInput:''}

    onChangeSearchInput=(event)=>{this.setState({searchInput:event.target.value})}
    render(){
        const {searchInput} = this.state
        const {destinationsList} = this.props
       
        const filterData=destinationsList.filter(eachDestination=>eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()))
      
        return(
            <div className="app-container">
                <h1 className="heading">Destination Search</h1>
                <div className="search-container">
                    <input type="search" className="search-input" value={searchInput} onChange={this.onChangeSearchInput} placeholder="Search Destination"/>
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                        alt="search icon"
                        className="search-icon"
                    />
                </div>

                    <ul className="destinations-container">
                        {filterData.map(eachRest => (
                                                        <DestinationItem
                                                            key={eachRest.id}
                                                            destinationDetails={eachRest}
                                                        />
                                                    )
                                        )
                        }
                    </ul>
            </div>
        )
    }
}
export default DestinationSearch;