/**
 * @swagger
 * /healthcentre/add:
 *   post:
 *     summary: Add a new HealthCentre.
 *     tags:
 *       - HealthCentre
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               provence:
 *                 type: string
 *               district:
 *                 type: string
 *           encoding:
 *             name:
 *               contentType: "text/plain"
 *           required:
 *             - name
 *             - provence
 *             - district
 *     responses:
 *       '201':
 *         description: HealthCentre added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '201'
 *                 message:
 *                   type: string
 *                   example: 'HealthCentre added'
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: 'Rwamagana Hospital'
 *                     provence:
 *                       type: string
 *                       example: 'Eastern provence'
 *                     district:
 *                       type: string
 *                       example: 'Rwamagana district'
 *                     HealthCentreCode:
 *                       type: string
 *                       example: '001'
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: '2023-12-24T17:29:49.464Z'
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: '2023-12-24T17:29:49.464Z'
 *       '400':
 *         description: HealthCentre already exists.
 *         content:
 *           application/json:
 *             example:
 *               status: '400'
 *               message: 'HealthCentre already exists'
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: '500'
 *               message: 'Failed to add a HealthCentre'
 *               error: 'Error message details'
 */

/**
 * @swagger
 * /healthcentre/update/{id}:
 *   put:
 *     summary: Update a HealthCentre.
 *     tags:
 *       - HealthCentre
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: HealthCentre ID to update.
 *       - in: formData
 *         name: name
 *         type: string
 *         description: New name for the HealthCentre.
 *       - in: formData
 *         name: provence
 *         type: string
 *         description: New provence for the HealthCentre.
 *       - in: formData
 *         name: district
 *         type: string
 *         description: New district for the HealthCentre.
 *     responses:
 *       '200':
 *         description: HealthCentre updated successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: '200'
 *               message: 'HealthCentre updated'
 *       '400':
 *         description: Bad request. Invalid parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: '400'
 *               message: 'Invalid request. Check parameters.'
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
 *               message: 'Failed to update HealthCentre'
 *               error: 'Error message details'
 */


/**
 * @swagger
 * /healthcentre/getall:
 *   get:
 *     summary: Get all HealthCentres.
 *     tags:
 *       - HealthCentre
 *     responses:
 *       '201':
 *         description: HealthCentres retrieved successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: '201'
 *               message: 'HealthCentres retrieved successfully'
 *               data:
 *                 - id: 1
 *                   name: 'HealthCentre1'
 *                   provence: 'Province1'
 *                   district: 'District1'
 *                   createdAt: '2023-12-24T00:00:00.000Z'
 *                   updatedAt: '2023-12-24T00:00:00.000Z'
 *                 - id: 2
 *                   name: 'HealthCentre2'
 *                   provence: 'Province2'
 *                   district: 'District2'
 *                   createdAt: '2023-12-24T00:00:00.000Z'
 *                   updatedAt: '2023-12-24T00:00:00.000Z'
 *       '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: '500'
 *               message: 'Failed to retrieve HealthCentres'
 *               error: 'Error message details'
 */

/**
 * @swagger
 * /healthcentre/getsingle/{id}:
 *   get:
 *     summary: Get a single HealthCentre by ID.
 *     tags:
 *       - HealthCentre
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: HealthCentre ID to retrieve.
 *     responses:
 *       '200':
 *         description: HealthCentre retrieved successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: '200'
 *               message: 'HealthCentre retrieved successfully'
 *               data:
 *                 id: 1
 *                 name: 'Sample HealthCentre'
 *                 provence: 'Sample Provence'
 *                 district: 'Sample District'
 *                 HealthCentreCode: '001'
 *                 createdAt: '2023-12-24T17:29:49.464Z'
 *                 updatedAt: '2023-12-24T17:29:49.464Z'
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
 *               message: 'Failed to retrieve HealthCentre'
 *               error: 'Error message details'
 */

/**
 * @swagger
 * /healthcentre/delete/{id}:
 *   delete:
 *     summary: Delete a HealthCentre by ID.
 *     tags:
 *       - HealthCentre
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: HealthCentre ID to delete.
 *     responses:
 *       '200':
 *         description: HealthCentre deleted successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: '200'
 *               message: 'HealthCentre deleted successfully'
 *               data:
 *                 id: 1
 *                 name: 'Sample HealthCentre'
 *                 provence: 'Sample Provence'
 *                 district: 'Sample District'
 *                 HealthCentreCode: '001'
 *                 createdAt: '2023-12-24T17:29:49.464Z'
 *                 updatedAt: '2023-12-24T17:29:49.464Z'
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
 *               message: 'Failed to delete HealthCentre'
 *               error: 'Error message details'
 */
