import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import s from './address.module.scss'

const PlacesAutocomplete = () => {
    const {
        ready,
        value,
        suggestions: {status, data},
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        callbackName: "YOUR_CALLBACK_NAME",
        requestOptions: {},
        debounce: 300,
    });
    const ref = useOnclickOutside(() => {

        clearSuggestions();
    });

    const handleInput = (e) => {

        setValue(e.target.value);
    };

    const handleSelect =
        ({description}) =>
            () => {
                setValue(description, false);
                clearSuggestions();

                getGeocode({address: description}).then((results) => {
                    const {lat, lng} = getLatLng(results[0]);
                    console.log("📍 Coordinates: ", {lat, lng});
                });
            };
    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: {main_text, secondary_text},
            } = suggestion;

            return (
                <li key={place_id} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });

    return (
        <div ref={ref}>
            <input required
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Your Address"
            />
            {status === "OK" && <ul className={s.list}>{renderSuggestions()}</ul>}
        </div>
    );
};
export default PlacesAutocomplete;