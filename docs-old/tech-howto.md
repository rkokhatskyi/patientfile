### Q1) How to start the documentation system?

vue-client> npm run styleguide

And then go to:

http://localhost:6060

### Q2) How to create a fresh DB with structure and master data?

```static
patientfile/db> docker stop patientfile_mysqld_1
patientfile/db> rm -rf var-lib-mysql
patientfile/db> unzip may-22-2020.zip -d var-lib-mysql
patientfile/db> chmod -R 777 var-lib-mysql
/patientfile> docker-compose -f docker-compose-dev.yml up -d mysqld 
```

### Q3) How to create a new structure and master data?

```static
var-lib-mysql> zip may-22-2020.zip * -r
```

### Q4) How to run same component inside  patient file component and also individually?

#### Step 1
A new componet called AddRecommendationTab is created inside: 

/Users/vk-tech/gt/sc-prog-repos/patientfile/vue-client/src/components/composition-layer2/AddRecommendation.vue

#### Step 2
Now there is a route defined in vue-client/src/router/index.js: 
  {
    path: '/recommendation',
    name: 'recommendation',
    component: () => import('@/views/Recommendation.vue')
  },

Now when ever someone comes to http://ip-address/recommendation the router sends the user to /views/Recommendation.vue

#### Step 3

Inside views/recommendation.vue the component created in step 1 is used. By the following codes:

1. Component is imported: 
import AddRecommendationTab from "@/components/composition-layer2/AddRecommendation";

2. Component is displayed:
```
     <el-tab-pane>
        <span slot="label" style="font-size:22px">Add recommendation</span>
        <AddRecommendationTab />
      </el-tab-pane>
```
The above structure is maintained because:

Components are supposed to be kept in components folder.

Views are supposed to use components but not define components.

### Q5) How to get started?

A new programmer should be able to write a new componet in 5 mins.

Start visual studio code
make sure vetur VSCode extension is installed.


### Q6) What code-formatter is used?
vetur