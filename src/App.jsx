import Buttons from './components/Buttons.jsx'
import Modals from './components/Modals.jsx'
import Navbar from './components/Navbar.jsx'
import Form from './components/Form.jsx'
import Cards from './components/Cards.jsx'
import Spinner from './components/Spinner';
import CheckboxForm from './components/Checkbox_form.jsx'

export default function App(){
  return (
    <section>
      <h1 class="m-4 text-black-500 bg text-5xl font-bold text-center p-4">
        UI-KIT
      </h1>
      <div className="grid grid-cols-2 gap-1 ml-10 mr-10" >
        <div >
          <h1 className=" ml-5 font-bold text-3xl  mb-4">Buttons</h1>
          <Buttons label="click me" variant="primary" onclick={() => alert('Button clicked!')} />
          <Buttons label="Login" variant = "Secondary" onclick={() => alert('button clicked')} />
        </div>
        <div>
          <h1 className=" ml-5 font-bold text-3xl  mb-4">NavBar</h1>
          <Navbar />
        </div>
        <div>
          <h1 className=" ml-5 font-bold text-3xl  mb-4">Forms</h1>
          <Form onsubmit={(e) => {e.preventdefault(); alert('form submitted succesfully')}} />
          <CheckboxForm title="Checkbox Form" onsubmit={(e) => {e.preventdefault(); alert('checkbox form submitted succesfully')}} />
        </div>
        <div>
          <h1 className=" ml-5 font-bold text-3xl  mb-4">Modals</h1>
          <Modals title="Modal Title" content="This is the modal content." />
        </div>
        <div>
          <h1 className=" ml-5 font-bold text-3xl  mb-4">Cards</h1>
          <Cards title={"Card title"} content={"some text about the card and the images"} />
        </div>
        <div>
          <h1 className=" ml-5 font-bold text-3xl  mb-4">Lodaer</h1>
          <Spinner />
        </div>
      </div>
    </section>
      
  )
}