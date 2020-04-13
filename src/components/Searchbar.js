import React, { Component } from 'react'

class Searchbar extends Component {
    state = { term: "" }

    
onInputChange= (event) => {
  this.setState({term:event.target.value})
}

onFormSubmit = (event) => {
  event.preventDefault()

  this.props.onFormSubmit(this.state.term)
}


  render() {
    return (
      <>

        <h2 className="ui header" style={{ display: 'flex', justifyContent: "center" }}>

          <div className="content" >
            <i class="youtube icon"></i>   Welcome to your video destination
  </div>
        </h2>

<div className="search-bar ui segment">
<form onSubmit={this.onFormSubmit} className="ui form">
<div className="field">
<label>Video search</label>
<input  
type="text" 
value={this.state.term}
onChange={this.onInputChange}
/>
</div>
</form> 
</div>
      </>
    )
  }
}

export default Searchbar
