import { Grid, Autocomplete, TextField } from "@mui/material";
import "./styles.css";

export default function SearchBar() {
  return (
    <div className="Searcher wrapper">
      <Grid container>
        <Grid className="Searcher" item xs={16} md={10} lg={14}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={["Hola", "Adios"].map((option: string) => option)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </Grid>
      </Grid>
    </div>
  );
}
