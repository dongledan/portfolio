import React from 'react'

const Projects = () => {
  return (
    <div className = 'project-container' id = 'projects'>
      <h1>projects</h1>
      <div className = 'project'>
        <div className = 'pictures'><img src = './images/vft.png' /></div>
        <div className = 'about'>
          <div className = 'title'>
            <h2>Venus Fly Trap</h2>
            <h3><a href='http://venus-fly-trap.herokuapp.com/'>venus-fly-trap.herokuapp.com</a></h3>
          </div>

          <div>
            <p>Plants are great, succulents are hardy, come visit this site to do e-commerce things. Here at venus fly trap, you can purchase digital plants and have the joy of not having the responsibility to take care of them.</p>
            <p>Taskmaster & Debugger • Setup backend and frontend, optimized code, squashed bugs, and created custom CSS.</p>
          </div>

          <p className = 'techs'>javascript • react-redux • css • postgresql • express • google oauth • stripe</p>
          
        </div>
      </div>

      <div className = 'project'>
        <div className = 'pictures'><img src = './images/cat.png' /></div>
        <div className = 'about'>
          <div className = 'title'>
            <h2>Meoware</h2>
            <h3><a href='https://github.com/griffnut/meoware'>github.com/griffnut/meoware</a></h3>
          </div>

          <div>
            <p>Ever just want to pet a cat but you don't have one? Well, here's a cat. A digital one... with a bonus duck! A small hackathon project to test out new technologies.</p>
            <p>Sole Developer • Implementing Electron, managing windows, and custom CSS.</p>
          </div>

          <p className = 'techs'>javascript • electron • react</p>
          
        </div>
      </div>

      <div className = 'project'>
        <div className = 'pictures'><img src = './images/panda.png' /></div>
        <div className = 'about'>
          <div className = 'title'>
            <h2>Pandance</h2>
            <h3><a href='http://pandance.herokuapp.com/'>pdandance.herokuapp.com</a></h3>
          </div>

          <div>
            <p>Feeling stressed? Then take a moment to watch a panda (and robot) dance to each keystroke. Want to test your reaction speed and typing skills? Then check out dance dance pandalution mode!</p>
            <p>Frontend Developer • Implemented BabylonJS features and created panda model.</p>
          </div>

          <p className = 'techs'>javascript • react-redux • css • postgresql • express • babylonjs • blender</p>
          
        </div>
      </div>
    </div>
  )
}

export default Projects