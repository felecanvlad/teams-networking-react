function getValues () {
    const firstName = document.querySelector("input[name=firstName]").value;
    const lastName = document.querySelector("input[name=lastName]").value;
    const gitHub = document.querySelector("input[name=gitHub]").value;
    
    const person = {
        firstName, 
        lastName, 
        gitHub
    };
    return person;
}

export const PersonsTable = ({border,persons, onSubmit, onDelete}) => (
   <form id = "main-form" onSubmit = {e => {
       e.preventDefault();
       const values = getValues();
       onSubmit(values);
   }}>
        <table border = {border}>
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Links</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
         {persons.map((person, index) => (
             <tr key={index}>
             <td>{person.firstName}</td>
             <td>{person.lastName}</td>
             <td>
                 <a target="_blank" href="https://github.com/{gitHub}">GitHub</a>
             </td>
             <td>
                 <a href="#" className = "delete-row" onClick = {e => {
                     onDelete(person.id);
                 }}>&#10006;</a>
                 <a href="#" className = "edit-row" data-id = "{person.id}">&#9998;</a>
             </td>
         </tr>
         ))}
    </tbody>
    <tfoot>
        <tr>
            <td>
                <input type="text" required placeholder="Enter first Name" name="firstName"/>
            </td>
            <td>
                <input type="text" required placeholder="Enter last Name" name="lastName"/>
            </td>
            <td>
                <input type="text" required placeholder="GitHub account" name="gitHub"/>
            </td>
            <td>
                <button type="submit">Save</button>
            </td>
        </tr>
    </tfoot>
</table>
   </form>
);