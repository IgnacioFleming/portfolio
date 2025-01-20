export const emailTemplate = (name, email, query) => {
  return `<!DOCTYPE html>
    <html lang="es">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta Recibida</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            }
            .container {
            width: 100%;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 1000px;
            margin: 20px auto;
            }
           
                .header {
                    background-color: #146fb2;
                  
                    padding: 20px;
                    text-align: center;
                    }
                    
                    .content {
                        padding: 20px;
                        }
                        .content p {
                            margin: 10px 0;
                            font-size:24px;
                            }
                              h2 {
                        font-size: 36px;
                        color:#ffffff
                        }

                strong, span{
                text-decoration:none;
                color:black;
                }
                                
     
            @media only screen and (max-width: 600px) {
                .container {
                    width: 90%;
                    }
                    h2 {
                        font-size: 24px;
                        color:#ffffff
                        }
                        }
                        </style>
                        </head>
                        <body>
                        <div class="container">
                        <div class="header">
                        <h2>¡Consulta Recibida!</h2>
                        </div>
                        <div class="content">
                        <p><span>Has recibido una nueva consulta!</span></p>
                        <p><strong>Contacto a nombre de:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Hora:</strong> ${Date()}</p>
                        <p><strong>Detalle de la Consulta:</strong></p>
                        <p>${query}</p>
                      
                        </div>
        
            </div>
            </body>
            </html>`;
};
