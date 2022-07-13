

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./AddExercise.css";


export default function AddExercise({ setAppState }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    category: "",
    Duration: "",
    intensity: "",


  });
  const handleOnInputChange = (event) => {
   
   
   

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));

    
    try {
      const res = await axios.post("http://localhost:3001/auth/register", {
        name: form.name,
        category: form.category,
        Duration: form.Duration,
        intensity: form.intensity,
     
      });

      if (res?.data?.user) {
        setAppState(res.data);
        setIsLoading(false);
        navigate("/Activity");
      } else {
        setErrors((e) => ({
          ...e,
          form: "Something went wrong with registration",
        }));
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.error?.message;
      setErrors((e) => ({
        ...e,
        form: message ? String(message) : String(err),
      }));
      setIsLoading(false);
    }
  };

  return (
    <div className="Register">
      <div className="card">
        <h2>Add Exercise</h2>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <div className="split-inputs">
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                name="name"
                placeholder="nutrition name"
                value={form.name}
                onChange={handleOnInputChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                placeholder="category"
                value={form.category}
                onChange={handleOnInputChange}
              />
             
            </div>

            <div className="split-inputs">
              <div className="input-field">
                <label htmlFor="Duration">Duration</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="1"
                  value={form.Duration}
                  onChange={handleOnInputChange}
                />
               
              </div>
              <div className="input-field">
                <label htmlFor="intensity">Intensity</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="1"
                  value={form.intensity}
                  onChange={handleOnInputChange}
                />
                
              </div>
            </div>

          

          

            <button
              className="btn"
              disabled={isLoading}
              onClick={handleOnSubmit}
            >
              {isLoading ? "Loading..." : "Save"}
            </button>
          </div>

        
        </div>
      </div>
    </div>
  );
}


