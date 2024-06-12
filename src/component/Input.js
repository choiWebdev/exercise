import './Input.css';

export default function Input() {
  return (
    <div className="input_wrap">
      <form>
        <div className="flex_box">
          <input className="ipt_txt" type="text" placeholder="Enter your task" />
          <button className="btn_submit">Add Tesk</button>
        </div>
      </form>
    </div>
  )
};
