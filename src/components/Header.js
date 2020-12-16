import {useState, useLayoutEffect, useCallback} from "react"
import MultiSelect from "react-multi-select-component"

const Header = ({numOfResults, setFilters, options}) => {

    const [selected, setSelected] = useState([]);

    const showAll = useCallback(() => {
        setFilters([])
    }, [])

    const filterOptions = () => {
        setFilters(selected.map(s => s.value))
    }

    useLayoutEffect(() =>{
        const closeIcon = document.querySelector(".dropdown-search-clear-icon")
        if(closeIcon) {
        closeIcon.addEventListener("click", showAll)
        }
        
    }, [selected, showAll,setFilters])



    return (
        <header className="header">
            <div className= "header-logo">
                <img src={`${process.env.PUBLIC_URL}media/logo.svg`} alt="Logo"/>
            </div>
            <MultiSelect
                className={"header-select"}
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy={"Select Filters"}
            />
            <div className={"header-buttons"}>
                <button className="header-button" disabled={selected.length === 0} onClick={filterOptions}>Filter</button>
                <button className="header-button" onClick={showAll}>Show All</button>
            </div>

            <div className={"header-text"}>Number of results: {numOfResults}</div>
        </header>
    );
};

Header.defaultProps ={
    options: []
}

export default Header;