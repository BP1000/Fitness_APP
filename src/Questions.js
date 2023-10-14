import { useState, useEffect } from "react";

const API_KEY = "oqUEC3+0c+y6gdAn5IcTXw==SMqO3f1sIZ4s42Un"
function Questions({setResults}) {
    //State is how we make variables that need to be seen and possibly updated on the page
    //SET FORM IS THE ONLY WAY TO UPDATE FORM OTHERWISE WE WILL NOT SEE THE CHANGES
    const [form, setForm] = useState({
       exerciseDays: 1,
       timePerWorkout: 1,
       workoutOnWeekends: true,
       workoutLocation: "Public Gym",
       workoutTimeOfDay: "Morning", 
       workoutExpierence: "6 Months",
    })
    // const [intensity, setIntensity] = useState("") 
    function calculateform() {
        let total = 0 
        let intensity; 
        if (form.exerciseDays === 7 || form.exerciseDays === 6 || form.exerciseDays === 5) {
                total += 3
        } else if (form.exerciseDays === 4 || form.exerciseDays === 3) {
                total+= 4
        }
        else {
                total += 5
        }

        if  (form.timePerWorkout < 1) {
            total += 5
         } else if (form.timePerWorkout < 2 && form.timePerWorkout < 1) {
            total += 4
        }   else if (form.timePerWorkout > 2) {
            total += 3
        }   else {
                total +=3
        }


        if (form.workoutExpierence === "lessThan3Months") {
            total += 1
        } else if (form.workoutExpierence === "greaterThan3monthsAndlessThan6Months") {
            total += 2
        } else {
            total += 3
        }

        if (total >= 11) {
            intensity = "expert"
        } else if (total > 7 ) {
            intensity = "intermediate"
        } else {
            intensity = "beginner"
        }
        fetch(`https://api.api-ninjas.com/v1/exercises?difficulty=${intensity}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Api-Key": API_KEY
            }
        })
        .then(response => response.json())
        .then(data => setResults(data))
       }
    

    // // useEffect(() => {
    //    if (intensity !== "") {
    //     fetch(`https://api.api-ninjas.com/v1/exercises?difficulty=${intensity}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "X-Api-Key": API_KEY
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => setResults(data))
    //    }
    // }, [calculateform])


  return (
    <div>
       <h1> Welcome to Supreme Fitness. Start by answering a few questions.</h1>
        <h1> How many days a week do you plan on excersising? </h1>
            <input type="number" min="1" max="7" onChange={(e) => setForm({...form, exerciseDays: parseInt(e.target.value)})}/>
        <h1> How much time do you have to excersise per workout? </h1>
            <input type="number" min="0" max="23" placeholder="hours" id="hours"/>
            <input type="number" min="0" max="59" placeholder="minutes" id="minutes"/>
        <h1> Do you want to workout on weekends? </h1>
            <select id="weekends" onChange={(e) => setForm({...form, workoutOnWeekends: e.target.value})}>
                <option value="yes">Yes</option>
                <option vlaue="no">No</option>
            </select>
        <h1> Where are you working out? </h1>
            <select id="location" onChange={(e) => setForm({...form, workoutLocation: e.target.value})}>
                <option value="publicgym">Public Gym</option>
                <option value="privategym">Private Gym</option>
                <option value="athome">At Home</option>
            </select>
        <h1> How long have you been working out?</h1>
            <select id="experience" onChange={(e) => setForm({...form, workoutExpierence: e.target.value})}>
                <option value="lessThan3Months">Less than 3 months</option>
                <option value="greaterThan3monthsAndlessThan6Months">Greater than 3 months and less than 6 months</option>
                <option value="greaterThan6months">Greater than 6 months</option>
            </select>
        <h1> What time do you want to workout?</h1>
            <select id="time" onChange={(e) => setForm({...form ,workoutTimeofDay: e.target.value})}>
                <option value="morning">Before 12 p.m</option>
                <option value="afternoon">12-6 p.m</option>
                <option value="evening">After 6 p.m</option>
            </select>
            <button onClick={calculateform}>Submit</button>
    </div>
  )
}
export default Questions; 
