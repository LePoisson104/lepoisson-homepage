"use client";
import { useEffect, useState, useCallback } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import ArticleLayout from "@/components/article";
import Section from "@/components/section";
import { tokens } from "@/lib/theme";
import axios from "axios";
import SuccessAlert from "@/components/alerts/success-alert";
import ErrorAlert from "@/components/alerts/error-alert";

const Contact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const TextFieldStyle = {
    mb: 2,
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      "&:hover fieldset": {
        borderColor: colors.primary[1000], // Green border on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: colors.primary[1000], // Green border on focus
      },
    },
    "& .MuiInputLabel-root": {
      "&.Mui-focused": {
        color: colors.primary[1000], // Green label when focused
      },
      "&:hover": {
        color: colors.primary[1000], // Green label on hover
      },
    },
  };

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleOnchange = useCallback((e) => {
    e.persist();
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  }, []);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.message) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleServerResponse = useCallback((ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      });
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const newErrors = validateForm();
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      axios({
        method: "POST",
        url: process.env.NEXT_PUBLIC_FORM_ENDPOINT_URL,
        data: formData,
      }).then((_response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted!"
        );
      });
    },
    [formData, handleServerResponse]
  );

  useEffect(() => {
    setErrors("");
  }, [formData.name, formData.email, formData.message]);

  return (
    <ArticleLayout title="Contact Me">
      {status.info.error && (
        <ErrorAlert message={status.info.msg} duration={4000} />
      )}
      {status.submitted && (
        <SuccessAlert
          message={"Your message has been submitted!"}
          duration={4000}
        />
      )}
      <Box mt={5}>
        <Section>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              mt: 4,
              maxWidth: 500,
              mx: "auto",
              display: "flex",
              height: "75vh",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h2" fontWeight={"bold"} mb={2}>
              Contact Me
            </Typography>

            <Typography
              mb={5}
              variant="body1"
              color="text.secondary"
              textAlign={"center"}
            >
              Feel free to contact me with any inquiries or questions!
            </Typography>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleOnchange}
              error={!!errors.name}
              helperText={errors.name}
              sx={{ ...TextFieldStyle }}
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleOnchange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ ...TextFieldStyle }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={8}
              value={formData.message}
              onChange={handleOnchange}
              error={!!errors.message}
              helperText={errors.message}
              sx={{ ...TextFieldStyle }}
            />
            <Button
              type="submit"
              fullWidth
              disabled={status.submitting}
              sx={{
                mt: 3,
                py: 1.5,
                textTransform: "none",
                width: "30%",
                bgcolor: colors.purpleAccent[400],
                color: colors.primary[400],
                borderRadius: 2,
                fontWeight: "bold",
                fontSize: 14,
                "&:hover": { bgcolor: colors.purpleAccent[300] },
              }}
            >
              {status.submitting ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Submit"
              )}
            </Button>
          </Box>
        </Section>
      </Box>
    </ArticleLayout>
  );
};

export default Contact;
