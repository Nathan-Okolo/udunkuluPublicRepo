/**
 * @apiDefine Success
 *
 * @apiSuccess {boolean} success The success of the response usually true
 * @apiSuccess {string} message This is the info about the request usually success
 * @apiSuccess {object} data This contains the resource (an object or
 * array of objects) and/or other required particulars
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200/201 OK
 *     {
 *       "success": true,
 *       "message": "success",
 *       "data": { ... } or [ {}, {}, ...]
 *     }
 */

/**
 * @apiDefine Error
 *
 * @apiError {boolean} success The success of the response usually false
 * @apiError {string} message This is the info about the request
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 xxx
 *     {
 *       "success": false,
 *       "message": "info about the error if any"
 *     }
 */
/**
 * @apiDefine Header Header
 * @apiHeader {String} token Token value.
 *
 */

/**
 * @api {post} /artists/artistId/albums/albumId/songs Upload
 * @apiDescription Upload a song
 *
 * The form should be sent as multipart/form-data
 * The particular input field that file should be attached to should be in this form
 *
 * < input name="_song" type="file"  / >
 *
 * @apiName UploadSong
 * @apiGroup Songs
 *
 * @apiParam {String} albumId the album's unique ID
 * @apiParam {String} artistId the artist's unique ID
 *
 * @apiParamExample {json} Request-Example: these fileds are required as well as _song required as a form data
 * {
 *    "mood": "possible moods",
 *     "genre": "possible genre"
 * }
 *
 * @apiUse Header
 * @apiUse Success
 *
 * @apiUse Error
 *
 */

/**
 * @api {get} /artists/artistId/albums/albumId/songs List
 * @apiDescription Lists all songs
 * @apiName ListSong
 * @apiGroup Songs
 *
 * @apiParam {String} albumId the album's unique ID
 * @apiParam {String} artistId the artist's unique ID
 *
 * @apiUse Success
 *
 * @apiUse Error
 */

/**
 * @api {put} /artists/artistId/albums/albumId/songs/id update
 * @apiDescription Udate a song or its detail
 * @apiName UpdateSong
 * @apiGroup Songs
 *
 * @apiParam {String} id the song's id
 * @apiParam {String} albumId the album's unique ID
 * @apiParam {String} artistId the artist's unique ID
 * @apiUse Header
 *  @apiUse Success
 *
 * @apiUse Error
 */

/**
 * @api {get} /artists/artistId/albums/albumId/songs/id Detail
 * @apiDescription Retrieves a particular song
 * @apiName GetSong
 * @apiGroup Songs
 *
 * @apiParam {String} id the song unique ID.
 * @apiParam {String} albumId album unique ID
 * @apiParam {String} artistId artist unique ID
 * @apiUse Success
 *
 * @apiUse Error
 *
 */

/**
 * @api {delete} /artists/artistId/albums/albumId/songs/id Delete
 * @apiDescription Deletes a song
 * @apiName DeleteSong
 * @apiGroup Songs
 *
 * @apiParam {String} id the song unique ID.
 * @apiParam {String} albumId album unique ID
 * @apiParam {String} artistId artist unique ID
 *
 * @apiUse Header
 * @apiUSe Success
 *
 * @apiUse Error
 */
