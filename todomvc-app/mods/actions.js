////////////////////////////////////////////////////////////////////////////////
// Actions
//

var actions = {} ;

actions.init = (present) => {
     actions.present = present ;
} ;

// Intents enable a further decoupling between 
// the view components and the actions
actions.intents = {
    edit: 'edit',
    save: 'save',
    done: 'done',
    displayAll: 'displayAll',
    displayActive: 'displayActive',
    displayCompleted: 'displayCompleted',
    toggleAll: 'toggleAll',
    delete: 'delete'

} ;

 actions.edit = (data, present) => {
    present = present || actions.present ;
    data = {editItemId: data.id} ;
    // next step of the reactive loop: present values to the model        
    present(data) ;
    return false ;
} ;

actions.save = (data, present) => {
    present = present || actions.present ;
    data.item = {name: data.name, description: data.description, id: data.id || null} ;
    // next step of the reactive loop: present values to the model        
    present(data) ;
    return false ;
} ;

actions.done = (data, present) => {
    present = present || actions.present ;
    data = {selectItemId: data.id} ;
    // next step of the reactive loop: present values to the model        
    present(data) ;
    return false ;
} ;

actions.displayAll = (data, present) => {
    present = present || actions.present ;
    data = {displayCompleted: true, displayActive: true} ;
    // next step of the reactive loop: present values to the model        
    present(data) ;
    return false ;
} ;

actions.displayActive = (data, present) => {
    present = present || actions.present ;
    data = {displayCompleted: false, displayActive: true} ;
    // next step of the reactive loop: present values to the model        
    present(data) ;
    return false ;
} ;

actions.displayCompleted = (data, present) => {
    present = present || actions.present ;
    data = {displayCompleted: true, displayActive: false} ;
    // next step of the reactive loop: present values to the model        
    present(data) ;
    return false ;
} ;

actions.toggleAll = (data, present) => {
    present = present || actions.present ;
    data = {toggleAll: true} ;
    // next step of the reactive loop: present values to the model        
    present(data) ;
    return false ;
} ;

actions.delete = (data, present) => {
    present = present || actions.present ;
    data.id = data.id || -1 ;
    data = {deletedItemId: data.id} ;
    // next step of the reactive loop: present values to the model        
    present(data) ;
    return false ;
} ;
 
