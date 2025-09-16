import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardComponent({ image }) {
    return (
        <Card style={{
            width: "18rem", margin: "10px", flex: "0 0 auto", backgroundColor: "#cbd0d5ff", display: "flex",
            flexDirection: "Column",
            gap: "10px",
            padding: "5px",
            borderRadius: "10px"
        }}>
            <Card.Img
                variant="top"
                src={image.url}
                alt={image.title}
                style={{
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px"

                }}
            />
            <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                <Card.Text>Auteur: {image.author}</Card.Text>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "5px",

                    }}
                >
                    {image.categories.map((cat, index) => (
                        <p key={index} style={{
                            margin: 0, backgroundColor: "lightblue", borderRadius: "10px", padding:"5px"
                        }}>
                            {cat}
                        </p>
                    ))}
                </div>

            </Card.Body>
        </Card>
    );
}
