## Q1) Why re-write the exisiting angular app?

1. The current angular app was developed to discover the psychiatrists needs. The system could not have been pre-architected to deliver the discovered features.

2. The current angular app is in 1.x and LTS ends in July 2021. Also good libraries are not being developed on Angular 1.x

## Q2) What new features are built into the new architecture?

### A. User experience benefits

#### A1. Local storage

1. When page is reloaded and there is no/slow connection to DB server the page will load from localstorage immediately.

2. When a component is already on the doctor browser and the doctor gives the commanbd "rec" then the recommendations show immediately from localcache and api is fired in the back. If the api returns new data the view is updated. (lazy-read)

3. When doctor adds a rec, the view gets updated. If server update fails then the view is reverted. (lazy-write)

4. When doctor is offline and open a patient file they see the page. #not-working

#### A2. Responsive

1. In each table column has priorities. So when less space is available low priority columns get hidden https://phppot.com/css/automatic-column-hiding-using-css-in-responsive-table

2. When there is more space available the data columns instead of breaking the paragraph into 2 lines use 1 line.

### B. Developer benefits

#### B1. Benefits from eco-system

1. **Temporal DB**: No need to maintain [created and discontinued related fields](https://element.eleme.io/#/en-US/component). Each table 8 fields are replaced with 3 fields.

2. **ORM**: On server side interaction with DB is through ORM [sequelize](https://sequelize.org/). 

    1A. So standard queries are already written.

    1B. [DB versioning and migrations can happen.](https://github.com/savantcare/patientfile/blob/master/node-server/models/recommendation.model.js)

3. **elelemt.io** [Pre made components](https://element.eleme.io/#/en-US/component/layout)

#### B2. Benefits from improved development practice

1. Maintain state on the client. When recommendation card state changes the rec panel changes its view automatically.
In the current angular app the recommendation panel was listening on socket and then receiving HTML to update its view.

2. No HTML is generated on server. All view is inside the .vue component. This view works on json returned by the server api. This allows different UIs to be written.

3. Remove fields not needed and make component DB's consistent and clean.

4. Code review before making it to master branch

5. Better code quality by developing it in open and make it open source from start.

## Q3) Why was vue chosen over angular latest version?
1. More github stars. Take this as a voting from worldwide developers.

2. Simpler to understand

3. Useful libraries
    1. vuex
    2. https://github.com/vue-generators/vue-form-generator ( https://blog.logrocket.com/how-to-build-reusable-forms-using-vue-form-generator/ )
    3. https://github.com/robinvdvleuten/vuex-persistedstate
    4. https://github.com/shentao/vue-multiselect
    5. https://dafrok.github.io/v-hotkey/#/step/4
    6. https://github.com/ElemeFE/element
       A. Add and close tab good design: https://element.eleme.io/#/en-US/component/tabs#add-close-tab
       B. Inline form validation: https://element.eleme.io/#/en-US/component/form#validation
       C. Good looking form: https://element.eleme.io/#/en-US/component/form#basic-form
       D. History shown as timeline https://element.eleme.io/#/en-US/component/timeline
       E. Card for right side: https://element.eleme.io/#/en-US/component/card
       F. confirming actions does not take huge mouse movement: https://element.eleme.io/#/en-US/component/popconfirm
       G. https://element.eleme.io/#/en-US/component/popover#popover -> Mouse over help looks good.
       H. Doing multiple adds in same form: https://element.eleme.io/#/en-US/component/form#delete-or-add-form-items-dynamically
	7. Table: Responsive and Draggable.

## Q4) Should a table library be used or developed internally?

![card-table-features](./images/analyzing-features-of-card-table.png)

Features needed:

1. KB to go up and down the data rows
2. Multi select using only KB or mouse.
3. Actions for each data row invoked using keyboard single key.
4. When multiple rows are selected then invoke "Multi select actions"
5. Tabbed tables -> First tab shows table 1 and 2nd tab shows table 2. Used at "Your recommendations" "Others recommendations"

For the tabs each tab can be a table component. And the tabs are displayed using Vue’s component element with the is special attribute:
https://vuejs.org/v2/guide/components.html#Dynamic-Components

6. Drag to reorder rows


## Q5) Why was expressJS chosen over laravel?

Laravel: Used by 660 and Stars 59K

express nodejs: used by 6.6M and Stars 49K

Sequlize nodejs: Used by 190K and Stars 22K

## Q6) Why each component should be in its own repo?

When recommendation a new version is released Sanjay wants to do git pull only for recommendation repo on the prod server.

### Q6.1) Why not try branching concept?
Sometimes we need to invite external developers to work on a component and we do not want to give them access to the git repo containing other components



### Q6.2) Why is each component not a seperate npm package?

The goal is for recommendation-panel and recommendation-card to have the same vuex store. So when the state changes in recommendation-panel the view of recommendation-card is automatically updated.

[The code till 4th May](https://github.com/vikaskedia/patientfile) implemented recommendation-panel and recommendation-card as two different npm packages. Different npm packages cannot share the same vuex store.

Hence recommendation-panel and recommendation-card cannot be two seperate npm packages they have to be components of the same vue app.

## Q7) Why use an auto doc generator?

 Decided not to use storybook since want something where the code is auto parsed.

 So for vue client side code decided to use [vue-styleguidist](https://github.com/vue-styleguidist/vue-styleguidist)
 Ref: https://www.youtube.com/watch?v=ryyAiUYvfY8

Click here for [steps to run the doc generator](/#/Getting-started/tech-how)