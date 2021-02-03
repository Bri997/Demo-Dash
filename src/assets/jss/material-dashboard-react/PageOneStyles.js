import { makeStyles } from '@material-ui/core/styles'

const pageOneStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  inputUpload: {
    background: '#eee',
    marginBottom: theme.spacing(3),
  },

  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    width: '65vw',
  },

  multiLine: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    width: '65vw',
  },
  button: {
    margin: theme.spacing(5),
  },
}))

export default pageOneStyles
