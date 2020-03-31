import AcUnit from "@material-ui/icons/AcUnit";
import UUID from "uuid/v4";

/*
* Please do not add all the mock data statically here.
* While you would solve the problem, you would not be solving the bug ;)
* */

const defaultMock = {
	species: 'Human',
	name : 'Jon Snow',
	icon: AcUnit,
	description: 'You know nothing, Jon Snow.'
};


const createRowData = ({name, species, Icon, description}) => ({
  id: UUID(),
  name: name || defaultMock.name,
  species: species || defaultMock.species,
  icon: Icon || defaultMock.icon,
  description: description || defaultMock.description
});


export { createRowData }
