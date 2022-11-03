import {FaRegHandPointRight} from 'react-icons/fa'
function Card(props) {
    return (
        <div className=" rounded-sm border-2 border-slate-200 h-[450px] w-[330px] shrink-0 text-center">
            <h1 className="text-3xl mt-8 font-bold">{props.heading}</h1>
            <p className="pt-7 text-md  text-left pl-10"><FaRegHandPointRight size={21} className='inline' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="pt-7 text-md  text-left pl-10"><FaRegHandPointRight size={21} className='inline' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="pt-7 text-md  text-left pl-10"><FaRegHandPointRight size={21} className='inline' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
            <button className="bg-blue-600 rounded-3xl p-2 mt-20 ">Click Me</button>
        </div>);
}
export default Card;




