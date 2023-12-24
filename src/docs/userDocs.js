/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           description: The first name of the user.
 *         lastName:
 *           type: string
 *           description: The last name of the user.
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user.
 *         pin:
 *           type: string
 *           description: The PIN of the user.
 *         type:
 *           type: string
 *           description: The type of the user.
 *         profile:
 *           type: string
 *           format: uri
 *           description: The URL of the user's profile picture.
 *         HealthCentre:
 *           type: integer
 *           description: The ID of the health centre where the user works.
 *
 * /DataCollection/API/users/register:
 *   post:
 *     summary: Register a new user.
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The first name of the user.
 *               lastName:
 *                 type: string
 *                 description: The last name of the user.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user.
 *               pin:
 *                 type: string
 *                 description: The PIN of the user.
 *               type:
 *                 type: string
 *                 description: The type of the user.
 *               profile:
 *                 type: string
 *                 format: binary
 *                 description: The user's profile picture.
 *               HealthCentre:
 *                 type: integer
 *                 description: The ID of the health centre where the user works.
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - pin
 *     responses:
 *       '200':
 *         description: User registered successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '400':
 *         description: Bad request. Invalid input or user already exists.
 *         content:
 *           application/json:
 *             example:
 *               status: '400'
 *               message: 'All Fields Are Required'
 *       '404':
 *         description: HealthCentre not found.
 *         content:
 *           application/json:
 *             example:
 *               status: '404'
 *               message: 'HealthCentre not found'
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: '500'
 *               message: 'Failed to register'
 *               error: 'Error message details'
 */

/**
 * @swagger
 * /DataCollection/API/users/login:
 *   post:
 *     summary: Log in a user.
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user.
 *               pin:
 *                 type: string
 *                 description: The PIN of the user.
 *             required:
 *               - email
 *               - pin
 *     responses:
 *       '200':
 *         description: User login successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '200'
 *                 message:
 *                   type: string
 *                   example: 'User Login Successful'
 *                 users:
 *                   $ref: '#/components/schemas/User'
 *                 token:
 *                   type: string
 *                   example: 'eyJhbGciOiJIUzI1NiIsIn...'
 *       '404':
 *         description: User not found or incorrect PIN.
 *         content:
 *           application/json:
 *             example:
 *               status: '404'
 *               message: 'User Not Found Pin is Incorrect'
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: '500'
 *               message: 'Failed to login'
 *               error: 'Error message details'
 */


/**
 * @swagger
 * /DataCollection/API/users/update/{id}:
 *   put:
 *     summary: Update a user by ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: The ID of the user to update.
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The updated first name of the user.
 *               lastName:
 *                 type: string
 *                 description: The updated last name of the user.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The updated email address of the user.
 *               pin:
 *                 type: string
 *                 description: The updated PIN of the user.
 *               type:
 *                 type: string
 *                 description: The updated type of the user.
 *               profile:
 *                 type: file
 *                 description: The updated profile picture of the user.
 *               HealthCentre:
 *                 type: integer
 *                 description: The updated HealthCentre ID of the user.
 *               role:
 *                 type: string
 *                 enum: [nurse, ideologist, admin]
 *                 description: The updated role of the user.
 *     responses:
 *       '200':
 *         description: User update successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '200'
 *                 message:
 *                   type: string
 *                   example: 'User Update succeed'
 *       '400':
 *         description: Bad request or email already used.
 *         content:
 *           application/json:
 *             example:
 *               status: '400'
 *               message: 'All Fields Are Required Invalid Email format Email Used In Our Database'
 *       '404':
 *         description: User not found or HealthCentre not found.
 *         content:
 *           application/json:
 *             example:
 *               status: '404'
 *               message: 'User not found HealthCentre not found'
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: '500'
 *               message: 'Failed to update'
 *               error: 'Error message details'
 */

/**
 * @swagger
 * /DataCollection/API/users/getall:
 *   get:
 *     summary: Get all users.
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: Users retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '200'
 *                 message:
 *                   type: string
 *                   example: 'Users retrieved successfully'
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       firstName:
 *                         type: string
 *                         example: John
 *                       lastName:
 *                         type: string
 *                         example: Doe
 *                       profile:
 *                         type: string
 *                         example: 'https://example.com/profile.jpg'
 *                       email:
 *                         type: string
 *                         example: john.doe@example.com
 *                       type:
 *                         type: string
 *                         example: nurse
 *                       role:
 *                         type: string
 *                         example: nurse
 *                       HealthCentre:
 *                         type: integer
 *                         example: 1
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: '500'
 *               message: 'Failed to fetch data'
 *               error: 'Error message details'
 */

/**
 * @swagger
 * /DataCollection/API/users/get/single/{id}:
 *   get:
 *     summary: Get a single user by ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID.
 *     responses:
 *       '200':
 *         description: User retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '200'
 *                 message:
 *                   type: string
 *                   example: 'A user retrieved successfully'
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     firstName:
 *                       type: string
 *                       example: John
 *                     lastName:
 *                       type: string
 *                       example: Doe
 *                     profile:
 *                       type: string
 *                       example: 'https://example.com/profile.jpg'
 *                     email:
 *                       type: string
 *                       example: john.doe@example.com
 *                     type:
 *                       type: string
 *                       example: nurse
 *                     role:
 *                       type: string
 *                       example: nurse
 *                     HealthCentre:
 *                       type: integer
 *                       example: 1
 *       '404':
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               status: '404'
 *               message: 'User not found'
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: '500'
 *               message: 'Failed to fetch data'
 *               error: 'Error message details'
 */

/**
 * @swagger
 * /DataCollection/API/users/delete/{id}:
 *   delete:
 *     summary: Delete a user by ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID.
 *     responses:
 *       '200':
 *         description: User deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '200'
 *                 message:
 *                   type: string
 *                   example: 'User deleted successfully'
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     firstName:
 *                       type: string
 *                       example: John
 *                     lastName:
 *                       type: string
 *                       example: Doe
 *                     profile:
 *                       type: string
 *                       example: 'https://example.com/profile.jpg'
 *                     email:
 *                       type: string
 *                       example: john.doe@example.com
 *                     type:
 *                       type: string
 *                       example: nurse
 *                     role:
 *                       type: string
 *                       example: nurse
 *                     HealthCentre:
 *                       type: integer
 *                       example: 1
 *       '404':
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               status: '404'
 *               message: 'User not found'
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: '500'
 *               message: 'Failed to delete data'
 *               error: 'Error message details'
 */
