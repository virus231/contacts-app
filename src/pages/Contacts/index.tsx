import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {useContacts} from "../../hooks/useContacts";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        marginTop: theme.spacing(4),
    },
    headContainer: {
        marginBottom: theme.spacing(3),
    }
}));

export const Contacts = () => {
    const classes = useStyles();
    const {data, isLoading, isError} = useContacts();


    if(isLoading) {
        return <div>...Loading</div>
    }

    if(isError) {
        return <div>..Error</div>
    }

    return (
        <div>
            <Container maxWidth="lg" className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.headContainer}>
                        <Typography variant="h3" component="h2">
                            Contacts
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            Contacts {data.map((name: any) => <div key={name.phone}>{name.email}</div>)}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}