import { Button, Checkbox, Divider, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { colors } from "../../data/Filter/color";
import { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { price } from "../../data/Filter/price";
import { discount } from "../../data/Filter/discount";
import { useSearchParams } from "react-router-dom";

const FilterSection = () => {
  const [expandColor, setExpandColor] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFilters, setSelectedFilters] = useState({
    color: '',
    price: '',
    discount: '',
  });
  const [openSection, setOpenSection] = useState<Record<string, boolean>>({
    colors: true,
    price: false,
    discount: false
  });

  const toggleSection = (section: string) => {
    setOpenSection(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const updateFilterParams = (e: any) => {
    const { name, value } = e.target;

    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (name === "price") {
      newSearchParams.delete("discount");
      setSelectedFilters(prev => ({ ...prev, discount: '' }));
    } else if (name === "discount") {
      newSearchParams.delete("price");
      setSelectedFilters(prev => ({ ...prev, price: '' }));
    }

    if (value) {
      newSearchParams.set(name, value);
    } else {
      newSearchParams.delete(name);
    }

    setSearchParams(newSearchParams);

    setSelectedFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearAllFilters = () => {
    const newSearchParams = new URLSearchParams();
    setSelectedFilters({
      color: '',
      price: '',
      discount: '',
    });
    setSearchParams(newSearchParams);
  };

  return (
    <div className="-z-50 w-[255px] mx-4 bg-[#1b1b1b] px-4 rounded-lg">
      <div className="flex items-center justify-between h-[50px]">
        <p className="text-lg font-semibold">Filters</p>
        <Button size="small" className="cursor-pointer font-semibold" onClick={clearAllFilters}>
          Clear All
        </Button>
      </div>
      <Divider />
      <section>
        <div className="mb-2 pb-1">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('colors')}
          >
            <h3 className="mt-2 mb-1.5 text-lg">Colors</h3>
            {openSection.colors ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </div>

          {openSection.colors && (
            <>
              <FormControl>
                <RadioGroup
                  aria-labelledby="color"
                  value={selectedFilters.color}
                  name="color"
                  onChange={updateFilterParams}
                >
                  {colors.slice(0, expandColor ? colors.length : 5).map((item) => (
                    <FormControlLabel
                      key={item.name}
                      value={item.name}
                      control={<Radio size="small" color="secondary" />}
                      label={
                        <div className="flex items-center gap-2">
                          <p className="text-sm">{item.name}</p>
                          <p style={{ backgroundColor: item.hex }} className="h-4 w-4 rounded-full"></p>
                        </div>
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              <div>
                <button
                  onClick={() => setExpandColor(!expandColor)}
                  className="text-[#E4A11B] w-[380px] my-1 cursor-pointer hover:font-semibold text-sm"
                >
                  {expandColor ? "Hide" : `+ ${colors.length - 5} more`}
                </button>
              </div>
            </>
          )}
          <Divider sx={{ marginTop: 1 }} />
        </div>
      </section>

      <section>
        <div className="mb-2 pb-1">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('price')}
          >
            <h3 className="my-1.5 text-lg" id="price">Price</h3>
            {openSection.price ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </div>

          {openSection.price && (
            <FormControl>
              <RadioGroup
                aria-labelledby="price"
                value={selectedFilters.price}
                name="price"
                onChange={updateFilterParams}
              >
                {price.map((item) => (
                  <FormControlLabel
                    key={item.name}
                    value={item.value}
                    control={<Radio size="small" color="secondary" />}
                    label={<p className="text-sm">{item.name}</p>}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          )}
          <Divider sx={{ marginTop: 1 }} />
        </div>
      </section>

      <section>
        <div className="mb-2 pb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('discount')}
          >
            <h3 className="my-1.5 text-lg" id="discount">Discount</h3>
            {openSection.discount ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </div>

          {openSection.discount && (
            <FormControl>
              <RadioGroup
                aria-labelledby="discount"
                value={selectedFilters.discount}
                name="discount"
                onChange={updateFilterParams}
              >
                {discount.map((item) => (
                  <FormControlLabel
                    key={item.name}
                    value={item.value}
                    control={<Radio size="small" color="secondary" />}
                    label={<p className="text-sm">{item.name}</p>}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          )}
          <Divider sx={{ marginTop: 1 }} />
        </div>
      </section>
    </div>
  );
};

export default FilterSection;
