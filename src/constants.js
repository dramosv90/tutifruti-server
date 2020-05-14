module.exports = {
  messages: {
    START_BOARD: '$START_BOARD',
    JOIN_BOARD: '$JOIN_BOARD',
    LEAVE_BOARD: '$LEAVE',
    CLOSE_BOARD: '$CLOSE_BOARD',
    BOARD_NOT_FOUND: '$BOARD_NOT_FOUND',
    CLIENT: '$WHO',
    TYPE: '$TYPE',
    SET_TIMEOUT: '$SET_TIMEOUT',
    GAME_PAUSED: '$GAME_PAUSED',
    PAUSE_GAME: '$PAUSE_GAME',
    GAME_RESUMED: '$GAME_RESUMED',
    RESUME_GAME: '$RESUME_GAME',
    INVALID_OPERATION: '$INVALID_OPERATION',
    BAN_CLIENT: '$BAN',
    CLIENT_NOT_FOUND: '$USER_NOT_FOUND',
    CLIENTS: '$CLIENTS',
    DESCLASSIFY: '$DESCLASSIFY',
    NOT_ANSWERS_YET: '$NOT_ANSWERS_YET',
    ANSWER: '$ANSWER',
    SET_TYPE: '$SET_TYPE',
    INVALID_TYPES: '$INVALID_TYPES',
    COMMAND_INCORRECT: '$COMMAND_INCORRECT',
    INACTIVITY: 'END CONNECTION FOR INACTIVITY'
  },

  errors: {
    INVALID_OPERATION: 3,
    CLIENT_NOT_FOUND: 5,
    INVALID_TYPES: 7,
    NOT_ANSWERS_YET: 9
  },

  types: {
    all: 'fruit,country,name,color,animal,thing,last_name,plant,carreer',
    simple: 'name,color,country'
  },

  answers: {
    all: 'apple,australia,alba,amarillo,araña,asta,astengo,amapola,astronauta',
    simple: 'amelia,amarillo,alemania'
  },

  gameLetters: 'ABCDEFGHIJQLMNÑOPQRSTUVWXYZ'.split(''),

  TYPE: 0,
  ANSWER: 1
}
