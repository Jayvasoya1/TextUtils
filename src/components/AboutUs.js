import React ,{useState} from 'react'

export default function AboutUs() {
    const [mystyle,setMystyle]=useState({
        color: 'black',
        backgroundColor: 'white'
    })
    
    const [btntext,setbtntext]=useState("Enable Dark Mode");

    const toggleStyle =()=>{
        if(mystyle.color==='black'){
            setMystyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtntext("Enable light Mode")
        }
        else{
            setMystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext("Enable dark Mode")
        }
    }
  return (
    <div className='container my-5' style={mystyle}>
            <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3"  style={mystyle}>
        <a className="navbar-brand" href="#"  style={mystyle}>AboutUs</a>
              <button onClick={toggleStyle} className="btn btn-primary px-15" >{btntext}</button>
        <ul className="nav nav-pills"  style={mystyle}>
            <li className="nav-item" >
            <a className="nav-link"  style={mystyle} href="#scrollspyHeading1">First</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">Second</a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu"  style={mystyle}>
                <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
            </ul>
            </li>
        </ul>
        </nav>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0" style={mystyle} >
        <h4 id="scrollspyHeading1" style={mystyle} >First heading Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla laboriosam nostrum, quisquam orem ipsumL dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi amet unde fugit ex nihil reiciendis repellat dignissimos fuga ipsa. Sequi dolore nobis suscipit blanditiis repellat qui. Deserunt, dicta eligendiexplicabo unde libero. Odit laboriosam earum voluptatibus adipisci! Fugit ducimus dolores ipsa? Blanditiis magni vero cumque deleniti!</h4>
        <p>...</p>
        <h4 id="scrollspyHeading2"  style={mystyle}>Second heading orem ipsumL dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi amet unde fugit ex nihil reiciendis repellat dignissimos fuga ipsa. Sequi dolore nobis suscipit blanditiis repellat qui. Deserunt, dicta eligendiorem ipsumL dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi amet unde fugit ex nihil reiciendis repellat dignissimos fuga ipsa. Sequi dolore nobis suscipit blanditiis repellat qui. Deserunt, dicta eligendi.</h4>
        <p>...</p>
        <h4 id="scrollspyHeading3"  style={mystyle}>Third heading orem ipsumL dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi amet unde fugit ex nihil reiciendis repellat dignissimos fuga ipsa. Sequi dolore nobis suscipit blanditiis repellat qui. Deserunt, dicta eligendiorem ipsumL dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi amet unde fugit ex nihil reiciendis repellat dignissimos fuga ipsa. Sequi dolore nobis suscipit blanditiis repellat qui. Deserunt, dicta eligendi</h4>
        <p>...</p>
        <h4 id="scrollspyHeading4"  style={mystyle}>Fourth headingorem ipsumL dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi amet unde fugit ex nihil reiciendis repellat dignissimos fuga ipsa. Sequi dolore nobis suscipit blanditiis repellat qui. Deserunt, dicta eligendiorem ipsumL dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi amet unde fugit ex nihil reiciendis repellat dignissimos fuga ipsa. Sequi dolore nobis suscipit blanditiis repellat qui. Deserunt, dicta eligendi</h4>
        <p>...</p>
        <h4 id="scrollspyHeading5"  style={mystyle}>Fifth heading orem ipsumL dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi amet unde fugit ex nihil reiciendis repellat dignissimos fuga ipsa. Sequi dolore nobis suscipit blanditiis repellat qui. Deserunt, dicta eligendiorem ipsumL dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi amet unde fugit ex nihil reiciendis repellat dignissimos fuga ipsa. Sequi dolore nobis suscipit blanditiis repellat qui. Deserunt, dicta eligendi</h4>
        <p>...</p>
        </div>
    </div>
  )
}
