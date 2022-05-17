import React from 'react';
import {Autocomplete, AutocompleteItem} from '@ui-kitten/components';
import StudyGroup from './StudyGroup';
import {View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const movies = [
  {title: 'Star Wars'},
  {title: 'Back to the Future'},
  {title: 'The Matrix'},
  {title: 'Inception'},
  {title: 'Interstellar'},
];

const filter = (item, query) =>
  item.title.toLowerCase().includes(query.toLowerCase());

const Search = () => {
  const [value, setValue] = React.useState(null);
  const [data, setData] = React.useState(movies);

  const onSelect = index => {
    setValue(movies[index].title);
  };

  const onChangeText = query => {
    setValue(query);
    setData(movies.filter(item => filter(item, query)));
  };

  const renderOption = (item, index) => (
    <AutocompleteItem key={index} title={item.title} />
  );

  return (
    <View
      style={{
        paddingHorizontal: wp(5),
        backgroundColor: 'white',
        paddingVertical: hp(1),
      }}>
      <Autocomplete
        placeholder="Place your Text"
        value={value}
        onSelect={onSelect}
        onChangeText={onChangeText}>
        {data.map(renderOption)}
      </Autocomplete>
    </View>
  );
};

export default Search;
