import {
    List,
    ListItem,
    // ListIcon,
    // OrderedList,
    // UnorderedList,
  } from '@chakra-ui/react'

const SuggestionsListComponent = (props) => {
    const { filteredSuggestions, onItemClick } = props;
    return filteredSuggestions.length ? (
      <List 
        style={{zIndex:1, 
                position:'absolute', 
                backgroundColor:'#fff', 
                borderWidth:1,
                width:'60%'
              }} 
        styleType="none" 
        class="suggestions"
      >
        {filteredSuggestions.slice(0,6).map((suggestion, index) => {
          let className;
          // Flag the active suggestion with a class
          //   if (index === activeSuggestionIndex) {
          //     className = "suggestion-active";
          //   }
          return (
            <ListItem 
              style={{borderBottomWidth:1, padding:3, fontSize:'14px', cursor:'pointer'}} 
              className={className} 
              key={index} 
              onClick={(event)=>onItemClick(event, suggestion)}
            >
              {suggestion.Pincode}, {suggestion.Office}, {suggestion.StateName}
              
            </ListItem>
          );
        })}
      </List>
    ) : (
      <div class="no-suggestions">
        <em>No suggestions, you're on your own!</em>
      </div>
    );
  };

  export default SuggestionsListComponent;