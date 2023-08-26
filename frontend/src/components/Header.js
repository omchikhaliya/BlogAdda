import React from 'react'

function Header() {

    const clickHandler = (e) => {
        e.preserveDafault()

        
    }

  return (
    <div>
        Bharad Raj
        <form onSubmit={clickHandler}>
        <button>submit</button>
        </form>
    </div>
  )
}

export default Header