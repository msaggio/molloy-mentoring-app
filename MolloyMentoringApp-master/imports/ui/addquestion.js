import React from 'react';

export default class AddQuestion extends React.Component {
    render() {
        return(
            <div class="container">
                <header>
                    <h1>Add Question</h1>
                    <form class="new-question">
                        <ul>
                          <li>Question: <input type="text" name="qText" placeholder="Type here..." /></li>
                          <li>Option 1: <input type="text" name="opt1" placeholder="" /></li>
                          <li>Option 2: <input type="text" name="opt2" placeholder="" /></li>
                          <li>Option 3: <input type="text" name="opt3" placeholder="" /></li>
                          <li>Option 4: <input type="text" name="opt4" placeholder="" /></li>
                          <li><input type="submit" value="submit" name="submit" /></li>
                        </ul>
                        <p>The last Question ID created was: <input type="text" name="lastQuestionId" /></p>
                        <p>Its associated Option IDs are: <input type="text" name="lastOptionIds" /></p>
                    </form>
                </header>
           </div>
        );
    }
};
  

