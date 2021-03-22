export const PersonsTable = ({border,persons}) => (
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
                 <a href="#" className = "delete-row" data-id = "{person.id}">&#10006;</a>
                 <a href="#" className = "edit-row" data-id = "{person.id}">&#9998;</a>
             </td>
         </tr>
         ))}
    </tbody>
    <tfoot>
        <tr>
            <td>
                <input type="text" placeholder="Enter first Name" name="firstName"/>
            </td>
            <td>
                <input type="text" placeholder="Enter last Name" name="lastName"/>
            </td>
            <td>
                <input type="text" placeholder="GitHub account" name="gitHub"/>
            </td>
            <td>
                <button>Save</button>
            </td>
        </tr>
    </tfoot>
</table>
);