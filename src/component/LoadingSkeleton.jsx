import React from "react";
import Card from "react-bootstrap/Card";

export default function CardSkeleton() {
    return (
        <Card
            style={{
                width: "18rem",
                margin: "10px",
                flex: "0 0 auto",
                backgroundColor: "#cbd0d5ff",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "5px",
                borderRadius: "10px",
                animation: "pulse 1.5s infinite",
            }}
        >
            <div
                style={{
                    height: "180px",
                    borderRadius: "10px",
                    backgroundColor: "#e0e0e0",
                }}
            ></div>

            <Card.Body>
                <div
                    style={{
                        height: "20px",
                        width: "70%",
                        backgroundColor: "#e0e0e0",
                        marginBottom: "10px",
                        borderRadius: "5px",
                    }}
                ></div>

                <div
                    style={{
                        height: "15px",
                        width: "50%",
                        backgroundColor: "#e0e0e0",
                        marginBottom: "10px",
                        borderRadius: "5px",
                    }}
                ></div>

                <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                    <div
                        style={{
                            height: "20px",
                            width: "50px",
                            backgroundColor: "#e0e0e0",
                            borderRadius: "10px",
                        }}
                    ></div>
                    <div
                        style={{
                            height: "20px",
                            width: "70px",
                            backgroundColor: "#e0e0e0",
                            borderRadius: "10px",
                        }}
                    ></div>
                </div>
            </Card.Body>

            <style>
                {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.4; }
            100% { opacity: 1; }
          }
        `}
            </style>
        </Card>
    );
}
