import React from "react";

export default function FilterComponent({ categories = [], onFilter }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {categories.map((cat, index) => (
                <p
                    key={index}
                    onClick={() => onFilter}
                    style={{
                        margin: 0,
                        backgroundColor: "lightblue",
                        borderRadius: "10px",
                        padding: "5px 10px",
                        cursor: "pointer",
                    }}
                >
                    {cat}
                </p>
            ))}
        </div>
    );
}
