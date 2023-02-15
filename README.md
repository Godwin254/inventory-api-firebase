# Express-Firebase-API
A simple express api, that utilizes firebase cloud functions & firestore and performs CRUD operations
- Uses firebase local emulator suite.

### Environment
- Ubuntu LTS

### Tools
1. Firebase Cloud Firestore
2. Firebase Local Emulator Suite
3. Firebase Cloud Function
4. Expressjs


# Setup
1. Clone the following repository to local machine
- `git clone  https://github.com/Godwin254/inventory-api-firebase/`

2. Navigate to the project folder
- `cd inventory-api-firebase`

3. Navigate to the functions directory
- `cd functions`

4. Install all dependencies
- `npm install`

5. Start the firebase emulator
- `npm run serve`

6. Visit the generated functions url to send requests to the inventory endponts
- `GET functions_url/inventories` - retrieves all inventories
- `GET functions_url/inventories/id` - retrieves a single inventory
- `POST functions_url/inventories` - creates an inventories
- `PUT functions_url/inventories/id` - updates a single inventory
- `DELETE functions_url/inventories` - delete a single inventory

