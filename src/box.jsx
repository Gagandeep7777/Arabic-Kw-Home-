import "./box.css"
function Box(){
return(
<>
<div className="box1">
<li>Buy</li>
<li>Rent</li>
<li>Agents</li>
<li>Market Center</li>
</div> 
<div className="box2">
    <div className="boxline1">
        <select name="type">
        <option value="Property Type">Property Type</option>
        <option value="Property Type">Property Type</option>
        </select>
        <select name="type">
        <option value="Market Center">Market Center</option>
        <option value="Property Type">Market Center</option>
        </select>
        <select name="type"> 
        <option value="Property Sub Type">Property Sub Type</option>
        <option value="Property Type">Property Sub Type</option>
        </select>
        <input type="text" placeholder="Min Price"/>
        <input type="text" placeholder="Max Price"/>
        <select name="type">
        <option value="Property Sub Type">Property Sub Type</option>
        <option value="Property Type">Property Type</option>
        </select>
    </div>

</div>
<div className="searchbtn">
    <button>Search</button>
</div>
</>
);
} 
export default Box