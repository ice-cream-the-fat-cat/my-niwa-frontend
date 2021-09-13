import { Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { formatISO } from "date-fns";
import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { LoadingWrapper } from "../../components/LoadingWrapper";
import { getGardenByGardenId } from "../../helpers/api/gardens/getGardenByGardenId";
import { useUserState } from "../../store/user/useUserState";
import { useApi } from "../../utils/api/useApi";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 845,
    },
    media: {
      height: 140,
    },
    myNiwaHeader: {
      width: "100%",
    },
  })
);

export const MyNiwaSettings = () => {
  const history = useHistory();
  const { userData } = useUserState();
  const { gardenId } = useParams<{ gardenId: string }>();
  const classes = useStyles();

  const [gardenDataApi, getGardenData] = useApi(getGardenByGardenId);

  const garden = useMemo(() => gardenDataApi.response?.garden, [gardenDataApi]);

  const rules = useMemo(
    () => gardenDataApi.response?.rules ?? [],
    [gardenDataApi]
  );

  useEffect(() => {
    if (gardenId) {
      const dateISO: string = formatISO(new Date(), {
        representation: "date",
      });
      getGardenData(gardenId, dateISO);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gardenId]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <Grid
          container
          className={classes.myNiwaHeader}
          direction="row"
          justifyContent="space-between"
        >
          <h1>My Niwa Settings</h1>
        </Grid>
        <LoadingWrapper isLoading={!gardenDataApi.isLoaded}>
          <section>
            <section>
              <h1>{garden?.name ?? "-"}</h1>
            </section>

            <section>
              <ul>
                {rules?.map((rule) => (
                  <li key={rule._id}>
                    {rule.name}
                    <br />
                    {rule.description}
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </LoadingWrapper>
      </div>
    </motion.div>
  );
};